import LexicalAnalyzer from "./LexicalAnalyzer";

export default function Expression(exp: string) {
  
  const lexical = new LexicalAnalyzer(exp.trim());

  return lexical.getEquation();
}
