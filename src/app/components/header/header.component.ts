import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Ripple} from 'primeng/ripple';
import {Badge} from 'primeng/badge';
import {NgClass} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {MenuItem} from 'primeng/api';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  imports: [
    Menubar,
    Ripple,
    Badge,
    NgClass,
    Avatar,
    InputText
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  items: MenuItem[] | undefined;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    console.log(this.elementRef.nativeElement);
  }

  ngOnInit() {

    window.addEventListener('scroll', this.scroll, true); //third parameter


    this.items = [
      {
        label: 'Models',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'San Francisco',
            icon: 'pi pi-bolt',
            // shortcut: '⌘+S',
          },
          {
            label: 'San Diago',
            icon: 'pi pi-server',
            // shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'Oakland',
            icon: 'pi pi-pencil',
            // shortcut: '⌘+U',
          },
        ],
      },
    ];
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener

    var winTop = event.scrollTop();
    if(winTop >= 30){
      this.renderer.addClass(document.body, 'sticky-header');
      // this.elementRef.nativeElement.getbody").addClass("sticky-header");
    }else{
      this.renderer.removeClass(document.body, 'sticky-header');
      // $("body").removeClass("sticky-header");
    }//if-else
  };

}
