import React from 'react';

export default function Loading() {
    return(
        <div className="flex justify-center items-center h-[635px]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
        </div>
    )
}