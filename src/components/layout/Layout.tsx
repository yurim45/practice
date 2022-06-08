import React, { ReactNode } from 'react';
import { styled } from '@shared/styles/theme';
import flex from '@shared/styles/flex';
import { sectionTitle } from '@shared/styles/variable';

type LayoutProps = {
  pageTitle: string;
  children: ReactNode;
  color?: string;
  bgColor?: string;
  lineColor?: string;
};

const Layout = ({
  pageTitle,
  children,
  bgColor = 'white',
  color = 'text-333',
  lineColor = 'blue',
}: LayoutProps) => {
  return (
    <StSction bgColor={bgColor}>
      <Inner color={color}>
        <h2>{pageTitle}</h2>
        <StLine lineColor={lineColor} />
        <StContent>{children}</StContent>
      </Inner>
    </StSction>
  );
};

export default Layout;

const StSction = styled.section<{ bgColor: string }>`
  width: 100vw;
  padding: 150px 0;
  background: ${({ bgColor }) => `var(--${bgColor})`};
`;

const Inner = styled.div<{ color: string }>`
  max-width: 1140px;
  margin: auto;

  h2 {
    ${sectionTitle()};
    color: ${({ color }) => `var(--${color})`};
  }
`;

const StLine = styled.div<{ lineColor: string }>`
  width: 50px;
  margin: 50px auto;
  border-bottom: 2px solid ${({ lineColor }) => `var(--${lineColor})`};
`;

const StContent = styled.div`
  ${flex};
  padding: 20px 0;

  @media ${({ theme }) => theme.mobile} {
    ${flex({
      direction: 'col',
    })};
  }
`;