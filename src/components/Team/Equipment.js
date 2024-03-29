import React from "react";
import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const Equipment = (props) => {
  const [equipment, setEquipment] = useState(null);

  let teamidentifier = `${props.teamID}`;

  useEffect(() => {
    const getEquipment = async () => {
      const remoteEquipment = await fetchEquipment();
      setEquipment(remoteEquipment);
    };
    getEquipment();
  }, [teamidentifier]);

  const fetchEquipment = async () => {
    const res = await fetch(
      `https://lakers-backend.herokuapp.com/lookupequipment/${teamidentifier}`
    );
    const data = await res.json();
    // console.log(data)
    return data.equipment;
  };

  return (
    <>
      {equipment ? (
        <div className="equipment-cards ">
          {equipment.map((gear) => (
            <EquipmentCard gear={gear} key={gear.idEquipment} />
          ))}
        </div>
      ) : (
        <div className="no_equipment">
            <p> No equipment images are available for this team.</p>
        </div>
      )}
    </>
  );
};

export default Equipment;
