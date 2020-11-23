import { animate, animateChild, group, query, sequence, style, transition, trigger } from '@angular/animations';

export const BP_ANIM_SLIDEINANIM =
  trigger('routeAnimations', [
    
    // transition('HomePage <=> AboutPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ]),

    transition('* <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild(), {optional: true}),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ], {optional: true}),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),

    transition('* <=> HomePage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild(), {optional: true}),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ], {optional: true}),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),

    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),


    transition('* => ContactPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),



    transition('MainPage <=> SubPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),




    transition('old => new', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
        })
      ]),
      query(':enter', [
        style({ top: '-100%' })
      ]),
      query(':leave', animateChild(), {optional: true}),
      sequence([
        group([
          query(':leave', [
            animate(1200, style({ top: '100%' }))
          ], {optional: true}),
          query("app-header, app-footer", [
            animate(1000, style({transform: 'scale(1,0)'}))
          ], {optional: false}),
          // query(':enter', [
          //   animate('1200ms ease-out', style({ top: '0px' }))
          // ])
        ]),
        // query('app-header, app-footer', [
        //   animate(1000, style({transform: 'scale(1,1'}))
        // ])        
      ]),
      // query(':enter', animateChild()),
    ])

  ]);