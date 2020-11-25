import { animate, animateChild, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

const optional = { optional: true }


const ANIM_FROM_PROMOCJE = () => {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [

    ])


  ]
}

const ANIM_TO_PROMOCJE = () => {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translate3d(0, 100%, 0)'
      })
    ], optional),
    query(':enter', [
      animate(650,         
        style({
          opacity: 1,
          transform: 'scale(1) translate3d(0, 0, 0)',
        })
        ),
      ]),
    query(':enter', animateChild())
  ]
}

const ANIM_DIRECTION = (direction: string, queryStr: string = 'mat-card') => {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [direction]: '100%',
        opacity: 0,
      })
    ], optional),
    sequence([
      query(':leave', [
        animateChild(),
        style({
          position: 'absolute',
          transform: 'translate3d(0,0,0)',
          width: '100%',
          left: 0,
          opacity: 1
        }),
        query(queryStr, [
          stagger(150, [
            animate('500ms ease-in', style(
              {
                transform: 'translate3d(0, -100%, 0)',
                opacity: 0,
              })
            ),
          ])
        ], optional)
      ], optional),
      query(':enter', [
        style({ 
          top: 0,
          [direction]: '-100%',

        }),
        animate('350ms ease-out', style({
          [direction]: 0,
          opacity: 1
        }))
      ], optional)
    ]),
    query(':enter', animateChild())
  ]
}



export const BP_ANIM_SLIDEINANIM =
  trigger('routeAnimations', [
    

    transition('Kontakt => Home', ANIM_DIRECTION('right', 'section')),
    transition('Promocje => Home', ANIM_DIRECTION('right', 'mat-card')),
    
    transition('Promocje => Kontakt', ANIM_DIRECTION('left', 'mat-card')),
    transition('Home => Kontakt', ANIM_DIRECTION('left', 'section')),
    transition('* => Kontakt', ANIM_DIRECTION('left', 'section')),

    transition('* => Promocje', ANIM_TO_PROMOCJE()),

    transition('* => MainPage', ANIM_DIRECTION('left', 'section')),
    transition('* => SubPage', ANIM_DIRECTION('right', 'section')),






  ]);
