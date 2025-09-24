import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function SpeedDialComponent() {
  const [hoveredAction, setHoveredAction] = useState(null);

  const actions = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      name: "Email",
      url: "mailto:contact@brightcodelab.net",
      color: "#00AFF0",
    },
    {
      icon: <FontAwesomeIcon icon={faPhoneVolume} />,
      name: "Call",
      url: "tel:+923151503181",
      color: "#f36d51",
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      name: "WhatsApp",
      url: "https://wa.me/+923151503181",
      color: "#25D366",
    },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      marginLeft: 'auto', // This will push the component to the right side of navbar
      padding: '0 16px',
      marginTop: '-250px',
    }}>
      {actions.map((action) => (
        <div 
          key={action.name}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseEnter={() => setHoveredAction(action.name)}
          onMouseLeave={() => setHoveredAction(null)}
        >
          {/* Action button */}
          <div
            style={{
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              backgroundColor: action.color,
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              cursor: "pointer",
              minWidth: "36px",
              minHeight: "36px",
              overflow: "hidden",
            }}
            onClick={() => window.open(action.url, "_blank")}
            onMouseEnter={() => setHoveredAction(action.name)}
            onMouseLeave={() => setHoveredAction(null)}
          >
            <FontAwesomeIcon 
              icon={action.icon.props.icon} 
              style={{ 
                color: "#fff", 
                fontSize: "16px",
                width: "26px",
                height: "26px"
              }} 
            />
          </div>
          
          {/* Hover label */}
          {hoveredAction === action.name && (
            <div style={{
              position: 'absolute',
              top: '17px', // Position below the icon
              left: '-20%',
              transform: 'translateX(-100%)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 1001
            }}>
              {action.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SpeedDialComponent;