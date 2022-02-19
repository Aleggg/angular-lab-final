import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @ViewChild('search') search: ElementRef | undefined;
  public textFragment: string = '';
  public visibleFriends = true; 
  public filteredUsers: Array<{
    name: string,
    email: string,
    id: number
  }> = [];
  public users: Array<{
    name: string,
    email: string,
    id: number
  }> = [
    {
      name: 'John Doe',
      email: 'john_doe@mail.com',
      id: 1
    },
    {
      name: 'John Du',
      email: 'john_du@mail.com',
      id: 2
    },
    {
      name: 'Alicija Kruch',
      email: 'alicija_kruch@mai.com',
      id: 3
    },
    {
      name: 'Monika Nis',
      email: 'monika_nis@mail.com',
      id: 4
    },
    {
      name: 'Antoni Kruch',
      email: 'antoni_kruch@mail.com',
      id: 5
    },
    {
      name: 'Claudia Shynda',
      email: 'claudia_shynda@mail.com',
      id: 6
    },
    {
      name: 'John Doe1',
      email: 'mail@com',
      id: 7
    },
    {
      name: 'John Doe2',
      email: 'mail@com',
      id: 8
    },
    {
      name: 'John Doe4',
      email: 'mail@com',
      id: 9
    },
    {
      name: 'John Doe3',
      email: 'mail@com',
      id: 10
    },
    {
      name: 'John Doe5',
      email: 'mail@com',
      id: 11
    },
    {
      name: 'John Doe7',
      email: 'mail@com',
      id: 12
    },
    {
      name: 'John Doe8',
      email: 'mail@com',
      id: 13
    },
  ];
  public friends: Array<{
    name: string,
    email: string,
    id: number
  }> = [
    {
      name: 'John Doe',
      email: 'john_doe@mail.com',
      id: 1
    },
    {
      name: 'John Du',
      email: 'john_du@mail.com',
      id: 2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.filteredUsers = this.users;
    this.textFragment = this.search?.nativeElement.value;
    this.visibleFriends = false;
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.textFragment) || user.email.toLowerCase().includes(this.textFragment));
  }

  addFriend(user: any): void {
    this.visibleFriends = true;
    this.friends.push(user);
  }

  removeFriend(user: any): void {
    const id = user.id;
    const index = this.friends.findIndex(friend => friend.id === id);
    this.friends.splice(index, 1);
  }
}
