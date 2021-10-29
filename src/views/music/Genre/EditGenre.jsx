import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class EditGenre extends React.Component{
    

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Edit Genre</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Basic Info</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Genre</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Jazz"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname411">Genre URL Slug</label>
                                                        <input type="text" className="form-control" id="inputname411" placeholder="" defaultValue="jazz"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="Music is an art form, social activity or cultural activity whose medium is sound and silence. " />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Genre Image</Label>
                                                      <div className="profileimg-input"><img alt="" src={IMGDIR+"/images/music/genres/genre-4.jpg"} className="img-fluid" style={{"width": "120px"}}/></div>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                    </div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default EditGenre;
