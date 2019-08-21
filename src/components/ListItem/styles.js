import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  border-bottom: 2px solid ${({theme}) => theme.border}

  &:last-child {
    border-bottom: 0:
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: .4px;
`;

export const Host = styled.span`
  color: ${({ theme }) => theme.text };
  font-size: 12px;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text };
  display: flex;
  width: 100%;
  height: 100%;
  align-item: center;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSecondary };
`;

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary };

  &:visited {
    color: ${({ theme }) => theme.textSecondary }
  }
`;