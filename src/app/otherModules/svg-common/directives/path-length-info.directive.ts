import { animate, AnimationBuilder, group, sequence, style } from '@angular/animations';
import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { repeat, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ISVGPathInfo } from '../interfaces/i-svg-path-info';

@Directive({
  selector: '[appPathLengthInfo]'
})
export class PathLengthInfoDirective implements OnInit, OnDestroy {
  @Input('animTime') animTime: number = 750;
  @Input('animDelay') animDelay: number = 0;
  @Input('divOpacity') divOpacity: number = 0.02;
  @Input('strokeBigPx') strokeBigPx: number = 5;
  @Input('zIndex') zIndex: number = -2;
  


  constructor(
    private builder: AnimationBuilder,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {

  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
    this.isDestroyed$.unsubscribe();
  }



  ngOnInit(): void {
    this.parentDiv = this.parentDivFinder();
    this.initObservable();
    this.initPathInfo();
    this.initAnim(this.animTime, this.animDelay);
  }


  bigAbsolute: SVGAElement;
  bigAbsoluteId: string;
  isDestroyed$: Subject<boolean> = new Subject();
  isPathCounted: boolean;
  parentDiv: HTMLDivElement;
  pathInfoArr: ISVGPathInfo[];
  pathFullLength: number;




  initAnim(animTime: number, delay: number) {
    for (let index = 0; index < this.pathInfoArr.length; index++) {
      const pathInfo = this.pathInfoArr[index];
      this.prepAnim(pathInfo, animTime, delay);
    }
  }

  initObservable() {

    const mouseLeave$ = fromEvent(this.elRef.nativeElement, 'mouseleave').pipe(
      takeUntil(this.isDestroyed$),
      tap(() => {
        this.bigRemove();
      })
    );

    const mouseOver$ = fromEvent(this.elRef.nativeElement, 'mouseenter').pipe(
      takeUntil(this.isDestroyed$),
      tap(() => {
        this.prepAnimSequenceTrimPath();
        this.bigShow();
      }),
      switchMap(() => mouseLeave$),
      repeat(),
      takeUntil(this.isDestroyed$),
    );


    mouseOver$.subscribe(
      (_mouseOver: any) => {

      },
      (error) => console.log('_mouseOver error', error),
      // ()=>console.log('_mouseOver completed..')
    );
  }



  bigShow() {
    const _parent = this.parentDiv;
    this.renderer.setStyle(_parent, 'position', 'relative');

    let _svg = this.renderer.createElement('svg', 'svg');

    //
    // chceck if SVG has viewBox...
    // 
    //
    let _viewBox = (this.elRef.nativeElement as SVGElement).getAttribute('viewBox');
    _viewBox = _viewBox ? _viewBox.replace("viewBox ", " ") : "0 0 500 500";

    this.renderer.setAttribute(_svg, 'viewBox', _viewBox);
    this.renderer.setAttribute(_svg, 'x', '0');
    this.renderer.setAttribute(_svg, 'y', '0');

    this.renderer.setAttribute(_svg, 'width', '100%');
    this.renderer.setAttribute(_svg, 'height', '100%');
    this.renderer.setAttribute(_svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(_svg, 'preserveAspectRatio', 'xMidYMid meet');


    //
    // FIRST LAYER PATH
    //
    //
    // clone paths bottom paths
    //
    this.pathInfoArr.forEach(p => {
      let _path = p.svgPath.cloneNode() as SVGPathElement;
      this.renderer.setStyle(_path, 'fill', 'none');
      this.renderer.setStyle(_path, 'stroke', 'black');
      this.renderer.setStyle(_path, 'strokeWidth', `${this.strokeBigPx}px`);


      let _pathInfo: ISVGPathInfo = {
        pathLength: _path.getTotalLength(),
        svgPath: _path
      };

      //
      // path anim time
      //
      this.prepAnim(_pathInfo, 1000);
      // animFn(_pathInfo, 1000);
      this.renderer.appendChild(_svg, _path);
    });


    //
    // create DIV container
    // gen random ID
    //

    const divId: string = Math.floor((Math.random() * 100000)).toString();
    this.bigAbsoluteId = divId;

    let _div = this.renderer.createElement('div');
    this.renderer.setAttribute(_div, 'id', divId);
    this.renderer.setStyle(_div, 'position', 'fixed');

    this.renderer.setStyle(_div, 'top', '25%');
    this.renderer.setStyle(_div, 'left', '25%');
    this.renderer.setStyle(_div, 'width', '50%');
    this.renderer.setStyle(_div, 'height', '50%');

    this.renderer.setStyle(_div, 'zIndex', this.zIndex);
    this.renderer.setStyle(_div, 'opacity', this.divOpacity)

    this.renderer.appendChild(_div, _svg);
    this.renderer.appendChild(_parent, _div);

    //
    // add animation
    //

    const _anim = this.builder.build([
      // style({
      //   position: 'fixed',
      //   transform: 'scale3d(0.5, 0.5, 0)'
      // }),
      group([
        animate(1800, style({
          transform: 'scale3d(3, 3, 0)',
        })),
        animate(`${400}ms ${1400}ms`, style({
          opacity: 0
        }))
      ])

    ])

    const _player = _anim.create(_div);
    _player.play();
  }




  bigRemove() {
    const _parent = this.parentDiv;
    const _childNodes = _parent.getElementsByTagName('div');

    for (let d = 0; d < _childNodes.length; d++) {
      const _div = _childNodes[d] as HTMLDivElement;

      if (_div instanceof HTMLDivElement && _div.id && _div.id == this.bigAbsoluteId) {
        //
        // prep :leave animation, thne delete onDone
        //
        const _leaveAnim = this.builder.build([
          animate(350, style({
            opacity: 0
          }))
        ])

        const _leavePlayer = _leaveAnim.create(_div);
        _leavePlayer.play();

        _leavePlayer.onDone(()=>{
          this.renderer.removeChild(_parent, _div);
        })
      }
    }
  }


  calcPathsLength(pahtsInfo: ISVGPathInfo[]): number {
    let res: number = 0;
    pahtsInfo.forEach(p => {
      res += p.pathLength;
    });
    return res;
  }



  initPathInfo() {
    if (this.isPathCounted) { return; }
    const el = this.elRef.nativeElement as SVGElement;
    const paths = el.getElementsByTagName('path');

    this.pathInfoArr = [];
    this.genPathInfo(paths, this.pathInfoArr);

    //
    // full path length calc
    //
    this.pathFullLength = this.calcPathsLength(this.pathInfoArr);
    this.isPathCounted = true;
  }




  genPathInfo(paths: HTMLCollectionOf<SVGPathElement>, resArr: ISVGPathInfo[]) {
    for (let index = 0; index < paths.length; index++) {
      const p = paths[index] as SVGPathElement;
      const _length = (p.getTotalLength());
      const pInfo = <ISVGPathInfo>{
        pathLength: _length,
        svgPath: p
      };
      resArr.push(pInfo);
    }

    resArr = resArr.reverse();
  }


  parentDivFinder():HTMLDivElement {

    let _parentNode = this.elRef.nativeElement;
    let isSearching:boolean = true;

    //
    // searching div
    //

    while(_parentNode && isSearching) {
      if(_parentNode instanceof HTMLDivElement){
        isSearching = false;
      } else {
        _parentNode = this.renderer.parentNode(_parentNode);
        
      }
        
    }
    return _parentNode;
  }




  prepAnim(pInfo: ISVGPathInfo, animTime: number, delay: number = 0) {
    const anim = this.builder.build([
      style({
        strokeDasharray: pInfo.pathLength,
        strokeDashoffset: pInfo.pathLength
      }),
      sequence([
        animate(`${animTime}ms ${delay}ms`, style({
          strokeDashoffset: 0,
        })),
      ])

    ]);

    const player = anim.create(pInfo.svgPath);
    player.play();
  }



  prepAnimSequenceTrimPath() {
    const _allPathsLength = this.calcPathsLength(this.pathInfoArr);

    if (!this.isPathCounted || _allPathsLength == 0) { return; }
    let _delay = 0;

    this.pathInfoArr.forEach(p => {
      const _pathLengthPercent = p.pathLength / _allPathsLength;
      const _time = Math.floor(this.animTime * _pathLengthPercent);
      this.prepAnim(p, _time, _delay);
      _delay += _time;
    });
  }



}
