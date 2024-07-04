import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngselect',
  templateUrl: './ngselect.component.html',
  styleUrls: ['./ngselect.component.scss'],
})
export class NgselectComponent implements OnInit {
  public placeholderFolderText = 'Select a folder';
  public selectedFolderId: number | null = null;
  public searchedValueFound = true;
  protected listFolders = [
    { id: 1, name: 'folderOne' },
    { id: 2, name: 'folderTwo' },
    { id: 3, name: 'folderThree' },
  ];
  public filteredListFolders: any;
  public searchedValue = '';

  constructor() {}

  ngOnInit() {
    if (!this.selectedFolderId && this.searchedValueFound) {
      this.selectedFolderId = -1;
    }
    this.filteredListFolders = this.listFolders;
  }

  onDropdownClose() {
    const selectContainer = document.querySelector('.ng-select-container');
    if (selectContainer) {
      selectContainer.classList.remove('open');
    }
    this.filteredListFolders = this.listFolders;
    this.searchedValueFound = true; // Update searchedValueFound
  }

  onDropdownOpen() {
    const selectContainer = document.querySelector('.ng-select-container');
    if (selectContainer) {
      selectContainer.classList.add('open');
    }
  }

  onSearch(event: any) {
    this.selectedFolderId = -1;
    const searchValue = event.target.value.toLowerCase();
    this.filteredListFolders = this.listFolders.filter((folder) =>
      folder.name.toLowerCase().includes(searchValue)
    );
    this.searchedValue = searchValue;
    this.searchedValueFound = this.filteredListFolders.length > 0; // Update searchedValueFound
    if (this.searchedValueFound) {
      this.selectedFolderId = -1;
    }
  }

  onFolderSelected(selectedFolder: any) {
    this.placeholderFolderText = '';
    this.selectedFolderId = selectedFolder;
  }
}
