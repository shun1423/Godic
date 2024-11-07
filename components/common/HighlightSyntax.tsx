import * as React from "react";
import { Box, BoxProps, styled } from "@mui/material";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

interface HighlightSyntaxProps {
  code?: string;
  language?: Language;
}

const PreContainer = styled(Box, { name: "PreContainer" })<BoxProps>(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: "1rem",
  })
);

const Pre = styled("pre")<React.HTMLAttributes<HTMLPreElement>>({
  overflowX: "auto",
});

const HighlightSyntax: React.FunctionComponent<HighlightSyntaxProps> = (
  props
) => {
  const {
    code = `const sayHello = (name:string) => console.log(\`Hello \${name}\`);`,
    language = "tsx",
  } = props;

  return (
    <React.Fragment>
      {/* TypeScript 오류 무시 */}
      {/* @ts-ignore */}
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <PreContainer className={className} style={style}>
            <Pre>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          </PreContainer>
        )}
      </Highlight>
    </React.Fragment>
  );
};

export default HighlightSyntax;
