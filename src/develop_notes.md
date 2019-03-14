
### Needed for input:

```
<input type="text" class="" [(ngModel)]="edytowanyKontakt.imie">
FormsModule w app.module.ts
```

### Parent-child -> read only values
- want to pass a variable to a child component (read-only): 

`[name]="edytowanyKontakt.imie"` (parent)

... in the child; 

`@Input() name: string;` (child)

### Parent-child -> read-write -> passing reference to data object

- want to pass a structure to the child so that the parent sees the changes: pass a data structure such 
as "u : User"


### Parent-child -> read-write via emitting events from children 

- (binding by events): want the child to create "on changed" events that carry data (so that the parent can caputre the data and update
what it sees fit:)

`(nameChanged)="edytowanyKontakt.imie = $event"` (parent)

`@Output() nameChanged = new EventEmitter();  //will emit values; can customize what the parent will do in such case`

```
    <button class="btn btn-outline-info" (click)="addS()"> dodaj 's' </button>

  addS() {
    this.name += 's';
    this.nameChanged.emit(this.name);
  }
```


more see: https://appdividend.com/2018/01/28/angular-input-output-tutorial-example-scratch/
