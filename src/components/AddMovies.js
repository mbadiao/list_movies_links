import React from 'react'

const AddMovies = () => {
    return (
        <div> 
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add movie</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className="modal-action flex flex-col items-start">
                            <form method="dialog">
                            <div>
                                <input type="text" placeholder="Movie Name" className="input input-bordered w-full max-w-xs m-2" />
                                <input type="text" placeholder="Movie Description" className="input input-bordered w-full max-w-xs m-2" />
                            </div>
                            <button class="btn btn-neutral">Submit</button>
                            </form>
                        </div>
                    </div>
                </dialog>
        </div>
    )
}

export default AddMovies