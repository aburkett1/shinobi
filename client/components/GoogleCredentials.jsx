import React from 'react';

const GoogleCredentials = props => {
  return (
    <form id="googleCredentials">
      <input id="googleProject" name="googleProject" onChange={(e) => props.updateInfo(e.target.name, e.target.value)} type="text" placeholder="Project Name" />
      <pre>
        <textarea id="googleKey" name="googleKey" onChange={(e) => props.updateInfo(e.target.name, e.target.value)} placeholder={props.googleKey} spellCheck="false" rows="10"></textarea>
      </pre>
      <label htmlFor="googleKeyAlias">Key Alias:</label>
      <input
        type="text"
        id="googleKeyAlias"
        name="googleKeyAlias"
        placeholder={props.googleKeyAlias}
        onChange={e => props.updateInfo(e.target.name, e.target.value)}
      />
      <button type="button" className="saveButton" onClick={() => props.submitKey('googleKey')}>Add New Key</button>
      <select className="keySelection" name="googleKeyAlias" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
        <option defaultValue=''> -- select key -- </option>
        {
          props.keys.map((key, i) => {
            return (
              <option key={i} value={key.keyAlias} >{key.keyAlias}</option>
            )
          })
        }
      </select>
    </form>
  );
}

export default GoogleCredentials;
