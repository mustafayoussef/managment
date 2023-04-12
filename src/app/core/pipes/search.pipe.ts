import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(snapshotArr: any, searchValue: string) {
    if (!snapshotArr) {
      return [];
    }
    if (!searchValue) {
      return snapshotArr;
    }
    if (snapshotArr && searchValue) {

      return snapshotArr.filter((snapshot: any) => {
        if (snapshot.first_name.toLowerCase().includes(searchValue.toLowerCase())) {
          // console.log(snapshot);
          
          return snapshot.first_name.toLowerCase().includes(searchValue.toLowerCase());

        } else if (snapshot.last_name.toLowerCase().includes(searchValue.toLowerCase())) {
          return snapshot.last_name.toLowerCase().includes(searchValue.toLowerCase());

        } else if (snapshot.email.toLowerCase().includes(searchValue.toLowerCase())) {
          return snapshot.email.toLowerCase().includes(searchValue.toLowerCase());
        }
      });
    }
  }
}
