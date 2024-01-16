import React from 'react';
import './styles.scss';
import ViewDetail from './ViewDetail';

const page = () => {
    return (
        <main className='container mx-auto'>
            <ViewDetail />
            <h1>Header 1</h1>
            <div className='list'>
                <div className='card'>
                    <div className='title'>title</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus
                        magnam, quam deleniti dicta enim repellendus. Ut, saepe ipsam dolores culpa,
                        animi eaque vero non natus cupiditate aliquid iste soluta.
                    </div>
                </div>
                <div className='card'>
                    <div className='title'>title</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus
                        magnam, quam deleniti dicta enim repellendus. Ut, saepe ipsam dolores culpa,
                        animi eaque vero non natus cupiditate aliquid iste soluta.
                    </div>
                </div>
                <div className='card'>
                    <div>title</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus
                        magnam, quam deleniti dicta enim repellendus. Ut, saepe ipsam dolores culpa,
                        animi eaque vero non natus cupiditate aliquid iste soluta.
                    </div>
                </div>
                <div className='card'>
                    <div>title</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus
                        magnam, quam deleniti dicta enim repellendus. Ut, saepe ipsam dolores culpa,
                        animi eaque vero non natus cupiditate aliquid iste soluta.
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
