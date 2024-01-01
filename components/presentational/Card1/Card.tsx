import React, {PropsWithChildren, HTMLAttributes} from 'react';

export const Card1 = ({ children, rendered = true, ...otherProps }: PropsWithChildren<{
  rendered: boolean;
} & HTMLAttributes<HTMLDivElement>>) => (
 <div
  className="card"
  style={{
    border: rendered ? 'none' : '2px dotted #FF42A1',
    cursor: rendered ? 'default' : 'pointer',
  }}
  {...otherProps}
 >
   <div>
     <p>{children}</p>
   </div>
 </div>
);
