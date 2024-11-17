import React from 'react';

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-md h-[306px] w-full mt-20">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1581090465357-c8a1f71f0407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 3"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-md h-[266px] w-full ">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661373540779-edba6b49f420?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image 4"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ImageGrid;
