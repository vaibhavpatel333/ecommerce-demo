import React, { useState } from 'react';
import styles from "./index.module.css";

const CreateLocationModal = (props: any) => {
    const [locationName, setLocationName] = useState({
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: 0
    });

    const handleLocationNameChange = (event: any) => {
        setLocationName(event.target.value);
    };

    const handleSubmit = () => {
        props.onCreate(locationName);
        setLocationName({
            address: '',
            city: '',
            state: '',
            country: '',
            postalCode: 0
        });
        props.onClose();
    };

    return (
        <div className={styles.modal} style={{ display: props.show ? "block" : "none" }}>
            <div className={styles["modal-dialog"]}>
                <div className={styles["modal-content"]}>
                    <div className={styles["modal-header"]}>
                        <h5 className={styles["modal-title"]}>Create Location</h5>
                        <button type="button" className={styles["close"]} onClick={props.onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className={styles["modal-body"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="locationName">address:- </label>
                            <input
                                type="text"
                                className={styles["form-control"]}
                                name='address'
                                id="locationName"
                                placeholder="Enter address"
                                onChange={handleLocationNameChange}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="locationName">city:- </label>
                            <input
                                type="text"
                                className={styles["form-control"]}
                                id="locationName"
                                name='city'
                                placeholder="Enter city"
                                onChange={handleLocationNameChange}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="locationName">state:- </label>
                            <input
                                type="text"
                                className={styles["form-control"]}
                                id="locationName"
                                name='state'
                                placeholder="Enter state"
                                onChange={handleLocationNameChange}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="locationName">country:- </label>
                            <input
                                type="text"
                                className={styles["form-control"]}
                                id="locationName"
                                placeholder="Enter country"
                                name='country'
                                onChange={handleLocationNameChange}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="locationName">country:- </label>
                            <input
                                type="text"
                                className={styles["form-control"]}
                                id="locationName"
                                placeholder="Enter country"
                                name='po'
                                onChange={handleLocationNameChange}
                            />
                        </div>
                    </div>
                    <div className={styles["modal-footer"]}>
                        <button type="button" className={styles["btn btn-secondary"]} onClick={props.onClose}>
                            Cancel
                        </button>
                        <button type="button" className={styles["btn btn-primary"]} onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CreateLocationModal;
