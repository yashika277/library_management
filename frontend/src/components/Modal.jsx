import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Modal = ({ view, handleView, handleUpdate }) => {


    console.log(view, "modal view");
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5 fw-semibold" id="exampleModalLabel" style={{ color: "black" }}>Edit Data</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className='book-form'
                        //   onSubmit={submitData}
                        >
                            <TextField id="standard-basic" label=" Book Name:" variant="standard" name='bookName' value={view.bookName} onChange={handleView} />
                            <TextField id="standard-basic" label=" Author Name:" variant="standard" name='authorName' value={view.authorName} onChange={handleView} />
                            <TextField id="standard-basic" label=" Relese Year:" variant="standard" name='releaseYear' value={view.releaseYear} onChange={handleView} />
                            <TextField id="standard-basic" label=" Charges:" variant="standard" name='charge' value={view.charge} onChange={handleView} />
                            <TextField id="standard-basic" label=" Quntities:" variant="standard" name='quntity' value={view.quntity} onChange={handleView} />
                            {/* <input type='file' onChange={upload_img} name='bookImg' ></input> */}
                            <Stack direction="row" spacing={2}>
                                <Button onClick={handleUpdate} variant="contained" color="success" type='submit' style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    color: '#333'
                                }}>
                                    Update
                                </Button>
                            </Stack>
                        </Box>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
