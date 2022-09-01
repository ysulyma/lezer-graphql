import {LanguageSupport, LRLanguage} from "@codemirror/language";
import {styleTags, tags as t} from "@lezer/highlight";
import {parser} from "./graphql.js";

const keywords = [
  "directive",
  "enum",
  "extend",
  "fragment",
  "implements",
  "input",
  "interface",
  "mutation",
  "on",
  "query",
  "scalar",
  "schema",
  "subscription",
  "type",
  "union",
];

const parserWithMetadata = parser.configure({
  props: [
    styleTags({
      [keywords.join(" ")]: t.keyword,
      BooleanValue: t.bool,
      IntValue: t.number,
      FloatValue: t.number,
      NullValue: t.null,
      Value: t.lineComment,

      EnumValue: t.special(t.string),
      NamedType: t.atom,
      Directive: t.meta,
      StringValue: t.string,
      "FragmentName OperationDefinition": t.definition(t.variableName),
      Comment: t.lineComment,
      Variable: t.variableName,
    }),
  ]
});

export const exampleLanguage = LRLanguage.define({
  parser: parserWithMetadata,
});

export function graphql() {
  return new LanguageSupport(exampleLanguage, []);
}
