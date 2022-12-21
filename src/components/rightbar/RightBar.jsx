import './rightbar.scss'


const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button type="button">Follow</button>
              <button type="button">Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button type="button">Follow</button>
              <button type="button">Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <p>
                <span>Jane Doe</span>
                {' '}changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <p>
                <span>Jane Doe</span>
                {' '}changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <p>
                <span>Jane Doe</span>
                {' '}changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              <p>
                <span>Jane Doe</span>
                {' '}changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              
              <div className="online"></div>
              <span>Jane Doe</span>
              
            </div>
            
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              
              <div className="online"></div>
              <span>Jane Doe</span>
              
            </div>
            
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              
              <div className="online"></div>
              <span>Jane Doe</span>
              
            </div>
            
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              
              <div className="online"></div>
              <span>Jane Doe</span>
              
            </div>
            
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg" alt="" />
              
              <div className="online"></div>
              <span>Jane Doe</span>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar