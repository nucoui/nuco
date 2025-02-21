export interface JsonNode {
  tag: string;
  attr: { [key: string]: string };
  children: JsonNode[];
  text?: string; // textノードの場合にテキスト内容を格納する
}
