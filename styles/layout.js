import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, calc(100% - 64px))
    1fr;
    grid-column-gap: 32px;
`;

export const WrapperChild = styled(Wrapper)`
    grid-column: 2;
`;

export const FullBleedDiv = styled.div`
    width: 100%;
    grid-column: 1 / -1;
`;

export const FullBleedImg = styled.img`
    width: 100%;
    grid-column: 1 / -1;
`;