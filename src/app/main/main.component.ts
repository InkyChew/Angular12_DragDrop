import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

interface listItemI {
  container: string,
  text: number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, AfterViewInit {

  @ViewChildren("container") list: QueryList<ElementRef> | undefined;
  @ViewChildren("listItem") listItem: QueryList<ElementRef> | undefined;

  listSet: Array<any> = [
    {
      id: 'list1',
      title: 'Todo', 
      item: [
        {
          container: 'list1',
          text: 1
        },
        {
          container: 'list1',
          text: 2
        },
        {
          container: 'list1',
          text: 3
        },
        {
          container: 'list1',
          text: 4
        }
      ]
    }, 
    {
      id: 'list2',
      title: 'Done', 
      item: [
        {
          container: 'list2',
          text: 1
        }
      ]
    }
  ]

  dragElement: ElementRef | undefined;
  dragSource: listItemI | undefined;
  dragSourceId: string | undefined;
  dropContainerId: string | undefined;
  listItemId = 1;
  start: number = 0;
  leave: number = 0;

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit(): void {
    let listId = 1;
    this.list?.forEach((element) => {
      element.nativeElement.id = `list${listId++}`;
    })
    this.listItem?.forEach((element) => {
      element.nativeElement.id = `item${this.listItemId++}`;
    })
    console.log(this.list);
    // console.log(this.listItem);
  }

  dragstart(event: any, container:any, item: any) {
    // this.listItemId = this.listSet[containerNumber-1].item.length;
    // item.id = `item${this.listItemId}`;    
    this.dragSourceId = item.id;
    let containerNumber = parseInt(container.id.replace('list',''));
    let itemNumber = parseInt(item.id.replace('item',''));
    this.dragSource = this.listSet[containerNumber-1].item[itemNumber-1]
    this.start = event.y;
    console.log(this.dragSourceId);
    console.log(itemNumber);    
    console.log(this.dragSource);
  }

  dragenter(event: any, item: any) {
    console.log("enter" + item.id);
    this.preventEvent(event);
  }
  dragover(event: any, item: any) { 
    console.log("over" + item.id);   
    this.preventEvent(event);
  }

  dragleave(event: any, item: any) {
    this.leave = event.y;
    if(this.dragSourceId !== item.id && this.leave > this.start) {
      event.target.classList.add('moveUp');
      console.log("leave" + item.id);
    }
    this.preventEvent(event);
  }

  preventEvent(event: any){    
    event.preventDefault();
    event.stopPropagation()
  }

  dragleaveContainer(event: any, container: any) {
    console.log("drag leave " + container.id);    
  }

  drop(e: any, container: any) {
    console.log(this.dragSourceId);    
    console.log("drop at " + container.id);
    console.log(e);
    
    // this.dropContainerId = container.id;
    //   this.dragElement.nativeElement.id = `item${this.listItemId++}`;
    let containerNumber = parseInt(container.id.replace('list',''));
    if(this.dragSource)
      this.dragSource.container = `list${containerNumber}`;
    console.log(this.dragSource);
    console.log(this.dragSource?.container);
    
    this.listSet[containerNumber-1].item.push({...this.dragSource});
    // this.listItemId = this.listSet[containerNumber-1].item.length;    
  }
}
