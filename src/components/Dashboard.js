import React from 'react';
<br></br>
const BlogCard = ({ image, author, date, tags, title, subtitle, content }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    boxShadow: '0 3px 7px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.6%',
    background: '#fff',
    lineHeight: '1.4',
    fontFamily: 'sans-serif',
    borderRadius: '5px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const metaStyle = {
    position: 'relative',
    height: '200px',
  };

  const photoStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.2s',
  };

  const detailsStyle = {
    margin: 'auto',
    padding: '0',
    listStyle: 'none',
  };

  const detailsInnerStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '-100%',
    margin: 'auto',
    transition: 'left 0.2s',
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '10px',
    width: '100%',
    fontSize: '0.9rem',
  };

  const descriptionStyle = {
    padding: '1rem',
    background: '#fff',
    position: 'relative',
    zIndex: '1',
  };

  const readMoreStyle = {
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      <div style={metaStyle}>
        <div style={{ ...photoStyle, backgroundImage: `url(${image})` }}></div>
        <ul style={detailsStyle}>
          <li className="author">
            <a href="#">{author}</a>
          </li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <a href="#">{tag}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div style={descriptionStyle}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <p style={readMoreStyle}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

const BlogList = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  return (
    <div style={containerStyle}>
      <BlogCard
        image="https://repository-images.githubusercontent.com/501410194/3efc7aaa-3b9f-4be0-b138-0689a5ccfde8"
        author="John Doe"
        date="Aug. 24, 2015"
        tags={['Learn', 'Code', 'HTML', 'CSS']}
        title="HOSPITAL MANAGEMENT SYSTEM"
        content="The hospital management system organizes the stable functioning of daily tasks and interactions. This is a special tool to support the smooth operating of the software components that are vital for the clinic administration. The hospital records management software keeps a track of all the operations, stores the users’ data, performs its analysis and generates the reports. The medical institution is given the opportunity to collect its information in one place. It includes the patient and doctors’ records as well as the data concerning financial affairs, supply management, etc. Furthermore, it is only processed, classified and accessible for authorized users. The hospital database management system provides users with data security due to all regulations. Implementation of different functions empowers smooth and clear functionality."
      />
      <BlogCard
        image="https://repository-images.githubusercontent.com/501410194/3efc7aaa-3b9f-4be0-b138-0689a5ccfde8"
        author="Jane Doe"
        date="July. 15, 2015"
        tags={['Learn', 'Code', 'JavaScript']}
        title="HOSPITAL MANAGEMENT SYSTEM"
        content="The hospital management system organizes the stable functioning of daily tasks and interactions. This is a special tool to support the smooth operating of the software components that are vital for the clinic administration. The hospital records management software keeps a track of all the operations, stores the users’ data, performs its analysis and generates the reports. The medical institution is given the opportunity to collect its information in one place. It includes the patient and doctors’ records as well as the data concerning financial affairs, supply management, etc. Furthermore, it is only processed, classified and accessible for authorized users. The hospital database management system provides users with data security due to all regulations. Implementation of different functions empowers smooth and clear functionality."
      />
      <BlogCard
        image="https://repository-images.githubusercontent.com/501410194/3efc7aaa-3b9f-4be0-b138-0689a5ccfde8"
        author="Alice Wonderland"
        date="Sept. 10, 2015"
        tags={['Explore', 'Adventure', 'Travel']}
        title="HOSPITAL MANAGEMENT SYSTEM"
        content="The hospital management system organizes the stable functioning of daily tasks and interactions. This is a special tool to support the smooth operating of the software components that are vital for the clinic administration. The hospital records management software keeps a track of all the operations, stores the users’ data, performs its analysis and generates the reports. The medical institution is given the opportunity to collect its information in one place. It includes the patient and doctors’ records as well as the data concerning financial affairs, supply management, etc. Furthermore, it is only processed, classified and accessible for authorized users. The hospital database management system provides users with data security due to all regulations. Implementation of different functions empowers smooth and clear functionality."
      />
    </div>
  );
};

export default BlogList;
