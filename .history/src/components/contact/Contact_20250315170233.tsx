import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="contact-container">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h3>İletişim</h3>
            <p>Sanat eserlerim hakkında bilgi almak veya sipariş vermek için benimle iletişime geçebilirsiniz.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Konum</h4>
                  <p>İstanbul, Türkiye</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Telefon</h4>
                  <p>+90 (XXX) XXX XX XX</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Adresiniz"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-container {
          padding: 80px 0;
          background-color: #fff;
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-header h3 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #000;
          margin-bottom: 1rem;
        }

        .contact-header p {
          color: #666;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          background-color: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .info-item i {
          font-size: 1.2rem;
          color: #333;
          margin-top: 4px;
        }

        .info-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .info-item p {
          color: #666;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #fff;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          transform: translateY(-2px);
          color: #fff;
        }

        .social-links a:nth-child(1):hover { background-color: #1877f2; }
        .social-links a:nth-child(2):hover { background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); }
        .social-links a:nth-child(3):hover { background-color: #1da1f2; }
        .social-links a:nth-child(4):hover { background-color: #e60023; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          color: #333;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #333;
        }

        .submit-btn {
          background-color: #000;
          color: #fff;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #333;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-header {
            margin-bottom: 40px;
          }

          .contact-header h3 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 