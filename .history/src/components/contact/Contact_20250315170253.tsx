import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="tokyo_tm_contact">
      <div className="container">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        <div className="contact_info">
          <div className="left">
            <ul>
              <li>
                <div className="list_inner">
                  <h3>Location</h3>
                  <p>İzmir, Turkey</p>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>Email</h3>
                  <p><a href="mailto:contact@amyartstudio.com">contact@amyartstudio.com</a></p>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <h3>Phone</h3>
                  <p><a href="tel:+90 555 555 5555">+90 555 555 5555</a></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="fields">
              <form className="contact_form" onSubmit={handleSubmit}>
                <div className="first">
                  <ul>
                    <li>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="tokyo_tm_button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <ul className="social_list contact_social_list">
            <li>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com">
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact; 