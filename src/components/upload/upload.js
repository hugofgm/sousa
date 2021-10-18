import "./upload.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { projectStorage, db } from "../../firebase/config";

const UploadForm = () => {
  //GET COLLECTION NAMES AND DISLPAY AS OPTIONS FOR SELECT
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "collections"), (snapshot) => {
      setOptions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);
  //MONITOR WHAT OPTION IS CHOOSED
  const [selectedOption, setSelectedOption] = useState("Select Collection");
  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };
  //CREATE NEW PAINTING
  const handleImageSubmit = async (e) => {
    e.preventDefault();

    //CHECK FOR EMPTY FIELDS
    if (
      e.target.image.files.length &&
      e.target.title.value.length &&
      e.target.description.value.length !== 0
    ) {
      try {
        //GET DATA
        const image = e.target.image.files[0];
        const title = e.target.title.value;
        const description = e.target.description.value;
        const selectedCollection = e.target.selectCollection.value;
        const date = Date();
        //CREATE REF, UPLOAD PIC TO STORAGE, STORE IMGAGE URL
        const imageRef = ref(projectStorage, image.name);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);
        //UPLOAD DATA TO DB
        await addDoc(collection(db, "paintings"), {
          title: title,
          description: description,
          imageUrl: imageUrl,
          date: date,
          collection: selectedCollection,
        });
      } catch (error) {
        console.log("deu merda por causa disto:", error);
      }
    } else {
      console.log("encher");
    }
  };

  //CREATE NEW COLLECTION
  //Get desctipription
  const [collectionDescription, setCollectionDescription] = useState("");
  const handleCollectionSubmit = async (e) => {
    e.preventDefault();

    try {
      //GET DATA
      const collectionName = e.target.collectionName.value;
      //WRITE DATA
      await addDoc(collection(db, "collections"), {
        name: collectionName,
        description: collectionDescription,
      });
    } catch (error) {
      console.log("erro por causa disto", error);
    }
  };
  return (
    <div className="wrap">
      <form id="imageForm" className="imageForm" onSubmit={handleImageSubmit}>
        <h1 className="h1">Create new painting</h1>
        <div className="wrap2img">
          <div className="div1">
            <p>Select Image:</p>
            <input className="input" type="file" name="image" />
          </div>
          <div className="div2">
            <p>Title:</p>
            <input
              className="input"
              type="text"
              name="title"
              placeholder="title"
            />
          </div>
          <div className="div3">
            <p>Description:</p>
            <input
              className="input"
              type="text"
              name="description"
              placeholder="description"
            />
          </div>
          <div className="div4">
            <p>Select Collection:</p>
            <select
              className="input"
              name="selectCollection"
              form="imageForm"
              value={selectedOption}
              onChange={handleSelect}
            >
              {options.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <input
            className="input"
            type="submit"
            placeholder="submit"
            form="imageForm"
          />
        </div>
      </form>

      <form className="collectionForm" onSubmit={handleCollectionSubmit}>
        <h1 className="h1">Create new Collection</h1>
        <div className="wrap2col">
          <div className="div1">
            <p>Name:</p>
            <input
              className="Input"
              type="text"
              name="collectionName"
              placeholder="Name"
            />
          </div>
          <div className="div2">
            <p>Decription:</p>
            <textarea
              className="input"
              form="collectionForm"
              name="collectionDescription"
              placeholder="description"
              rows="4"
              cols="50"
              value={collectionDescription}
              onChange={(e) => {
                setCollectionDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <input
            className="input"
            type="submit"
            placeholder="add"
            style={{ gridRow: 3 }}
          />
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
