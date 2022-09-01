import {EditorState} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {basicSetup} from 'codemirror';
import {graphql} from './mod';
import {query} from './sample-query';
import './style.css';

const state = EditorState.create({
  doc: query,
  extensions: [basicSetup, graphql()],
});

const view = new EditorView({
  state,
});

document.querySelector('#app')?.append(view.dom);
