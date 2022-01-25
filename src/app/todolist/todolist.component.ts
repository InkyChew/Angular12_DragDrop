import { Component, OnInit } from '@angular/core';

interface listI {
  listId: number
  title: string
  item: Array<listItemI>
}

interface listItemI {
  listId: number
  itemid: number
  text: string
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todolist = [
    {
      listId: 1,
      title: 'Todo',
      item: [
        {
          listId: 1,
          itemid: 1,
          text: '1. learn angular'
          
        },
        {
          listId: 1,
          itemid: 2,
          text: '2. learn c#'
        },
        {
          listId: 1,
          itemid: 3,
          text: '3. learn css'          
        },
        {
          listId: 1,
          itemid: 4,
          text: '4. learn html'          
        }
      ]
    },
    {
      listId: 2,
      title: 'Done',
      item: [
        {
          listId: 2,
          itemid: 5,
          text: '5. learn english'          
        }
      ]
    }
  ]

  dragSource: listItemI | undefined;
  sourceIndex: number | undefined;
  previousContainer: listI | undefined;
  targetIndex: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  dragstart(list: listI, item: listItemI, itemIndex: number) {
    this.previousContainer = list;
    this.dragSource = item;
    this.sourceIndex = itemIndex;
    console.log("sourceIndex " + itemIndex);    
  }

  dragleave(item: listItemI, itemIndex: number) {
    this.targetIndex = itemIndex;
    console.log("targetIndex " + itemIndex);
    console.log(item);    
  }

  preventEvent(event: any){    
    event.preventDefault();
    event.stopPropagation()
  }

  drop(list: listI) {
    if(this.dragSource && this.sourceIndex !== undefined && this.targetIndex !== undefined) {
      this.previousContainer?.item.splice(this.sourceIndex, 1);    
      list.item.splice(this.targetIndex, 0, this.dragSource);
    }
    console.log(this.previousContainer);
    console.log(list);
  }
}
