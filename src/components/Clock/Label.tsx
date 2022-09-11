import React, { ReactNode } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useClockContext } from '../../hooks/useClockContext';
import { ClockerCtx } from '../../contexts/clocker';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Label = (props: Props) => {
  const { loading } = useClockContext() as ClockerCtx;

  return (
    <>
      {!loading ? 
        <StyledLabel>{props.children}</StyledLabel> : 
        <SkeletonTheme baseColor="#dddbdb" >
          <Skeleton height={60} width={300} style={{marginTop: '0.5rem'}}></Skeleton>
        </SkeletonTheme> 
      }
    </>
  );
}

const StyledLabel = styled.div`
  height: 1.4em;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 4em;
  color: #495057;
`;

export { Label };