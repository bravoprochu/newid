import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { IMetadata } from './i-metadata';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }



  updateMetadata(data: IMetadata) {
    this.title.setTitle(data.title ? data.title : 'NewId - Agencja Marketingowa, Nowa Tożsamość Twojej Firmy');

    const t: MetaDefinition = { name: 'description', content: data.description }
    this.meta.updateTag(t);

    this.removeRobotsMeta();
  }



  private removeRobotsMeta(){
    this.meta.removeTag("name='robots'");
  }

}
