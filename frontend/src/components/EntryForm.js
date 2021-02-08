import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RangeSlider from 'react-bootstrap-range-slider';
import axios from 'axios';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import { useHistory } from 'react-router-dom';


const EntryForm = () => {
  const history = useHistory();
  const { authToken, setAuthToken } = useAuth();

 
  const [ nrs1, setNrs1 ] = useState(0);
  const [ nrs2, setNrs2 ] = useState(0);
  const [ nrs3, setNrs3 ] = useState(0);
  const [ nrs4, setNrs4 ] = useState(0);
  const [ nrs5, setNrs5 ] = useState(0); 
  const patient = getFromToken(authToken, 'username');
  const [patient_id, setPatient_id] = useState(0);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await RMHApi.getUser(patient);      
        setPatient_id(res.user)
       
      } catch (err) {
        
      }
    }
    getUser()
  }, [patient])


  function handleSubmit(event){
    event.preventDefault();
    console.log("here");
    let data = {
      patient_id: patient_id.id,
      nrs1: nrs1,
      nrs2: nrs2,
      nrs3: nrs3,
      nrs4: nrs4,
      nrs5: nrs5
    }
    console.log(data);
    addEntry(data);
    
  }

  async function addEntry(data){
    try {
      const res = await RMHApi.registerEntry(data);      
      console.log(res);
      if (res.patient_id) {
        history.push('/dashboard');
      }
    } catch (err) {
      
    }
  }

  return (
    <>
      <form>
        <div className="form-group row">
          <div className="form-group col-sm-12 mb-3 mb-sm-0">
              <RangeSlider
                size="lg"
                value={nrs1}
                variant="primary"
                onChange={changeEvent => setNrs1(changeEvent.target.value)}
              />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-sm-12 mb-3 mb-sm-0">
              <RangeSlider
                size="lg"
                value={nrs2}
                variant="secondary"
                onChange={changeEvent => setNrs2(changeEvent.target.value)}
              />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-sm-12 mb-3 mb-sm-0">
              <RangeSlider
                size="lg"
                value={nrs3}
                variant="success"
                onChange={changeEvent => setNrs3(changeEvent.target.value)}
              />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-sm-12 mb-3 mb-sm-0">
              <RangeSlider
                size="lg"
                value={nrs4}
                variant="danger"
                onChange={changeEvent => setNrs4(changeEvent.target.value)}
              />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-sm-12 mb-3 mb-sm-0">
              <RangeSlider
                size="lg"
                value={nrs5}
                variant="warning"
                onChange={changeEvent => setNrs5(changeEvent.target.value)}
              />
          </div>
        </div>
        
        <div className="form-group row">
          <div className="col-sm-12 mb-3 mb-sm-0">
            <a href="login.html" onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                Submit Entry
            </a>
          </div>
        </div>
      </form>
    </>
  )
}

export default EntryForm;