import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl mt-24 dark:bg-secondary-dark-bg">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent
        height="650px"
      >
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        <EditorData />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor