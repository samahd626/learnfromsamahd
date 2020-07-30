import React from "react"

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.split(", ").map(t => (
        <li
          key={t}
          style={{
            borderRadius: `10px`,
            border: `1px solid lightblue`,
            padding: `2px 6px`,
            marginRight: `5px`,
            fontSize: `80%`,
            backgroundColor: 'green',
            color: "white",
            listStyle: "none",
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  )

export default Tags