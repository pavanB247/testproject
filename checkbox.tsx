import React, { useState } from "react";
import "./checkbox.css";

interface CheckedItems {
  all: boolean;
  postpaid: boolean;
  prepaid: boolean;
  text: boolean;
  voice: boolean;
  video: boolean;
}

const Checkbox: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    all: false,
    postpaid: false,
    prepaid: false,
    text: false,
    voice: false,
    video: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    
    if (name === "all") {
      setCheckedItems({
        all: checked,
        postpaid: checked,
        prepaid: checked,
        text: checked,
        voice: checked,
        video: checked,
      });
    } else {
      setCheckedItems((prev) => {
        const updated: CheckedItems = { ...prev, [name]: checked } as CheckedItems;
        updated.all = Object.keys(updated)
          .filter((key) => key !== "all")
          .every((key) => updated[key as keyof CheckedItems]);
        return updated;
      });
    }
  };

  return (
    <div className="checkbox-group">
      <label>
        <input
          type="checkbox"
          name="all"
          checked={checkedItems.all}
          onChange={handleChange}
        />
        AllService
      </label>
      <label>
        <input
          type="checkbox"
          name="postpaid"
          checked={checkedItems.postpaid}
          onChange={handleChange}
        />
        Postpaid
      </label>
      <label>
        <input
          type="checkbox"
          name="prepaid"
          checked={checkedItems.prepaid}
          onChange={handleChange}
        />
        Prepaid
      </label>
      <label>
        <input
          type="checkbox"
          name="text"
          checked={checkedItems.text}
          onChange={handleChange}
        />
        Text
      </label>
      <label>
        <input
          type="checkbox"
          name="voice"
          checked={checkedItems.voice}
          onChange={handleChange}
        />
        Voice
      </label>
      <label>
        <input
          type="checkbox"
          name="video"
          checked={checkedItems.video}
          onChange={handleChange}
        />
        Video
      </label>
    </div>
  );
};

export default Checkbox;