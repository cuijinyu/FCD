import React, { ReactElement, FC } from 'react';

interface MayBeNullProps {
    component: ReactElement | null | undefined
}

const MayBeNull:FC<MayBeNullProps> = props => props.component?<>{props.component}</>:<></>;

export default MayBeNull;