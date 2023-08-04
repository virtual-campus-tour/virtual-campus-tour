import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Truncate from 'react-truncate';

const DiningComp = () => (
  <Container id="dining-page">
    <Row>
      <Col className="center">
        <h1 className="small-spacer">UH Manoa Eateries</h1>
      </Col>
    </Row>
    <Row>
      <h2>Campus Center</h2>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://foodagogo.org/wp-content/uploads/2020/04/Bale_LOGO.jpg" />
          <Card.Body>
            <Card.Title>Ba-Le</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Truncate lines={5}>

                Located at Hemenway Hall, Ba-Le is the perfect stop if you're craving something a little different.

                Pastries, sandwiches, and pre-made salads are some of their quick lunch options. Popular items at Ba-Le include pho, pad thai, and banh mi sandwiches.

                Also offered at Ba-Le are a selection of La Tour Cafe macarons and entrees.

                Manoa Gardens, located inside Ba-Le, is our campus bar for those age 21 and older.
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/ba-le" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/studentlife/wp-content/uploads/BritoBowls_UniofHawaii.png" />
          <Card.Body>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Card.Title>B'RITO</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Truncate lines={5}>

                Located on the first floor of Campus Center across from the ATMs, B'RITO serves up fresh and flavorful Mexican food.

                We have a variety of different protein options to suit your taste!

              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/stir-fresh" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" />
          <Card.Body>
            <Card.Title>Starbucks</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                With a full menu, as well as seasonal and specialty items, coffee fanatics are sure to be pleased. Also available are pastries, fruit cups, and bottled beverages for your purchase.

                Our location strives to give you the very same experience found at any other Starbucks across the nation.
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/starbucks" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://www.jamba.com/-/media/jamba/site-logos/jamba-logo.jpg?v=1&d=20190608T213113Z" />
          <Card.Body>
            <Card.Title>Jamba</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                Visit Jamba for refreshing fruit smoothie blends, delicious and nutritious energy bowls, fresh juices, healthy baked goods and savory grab-and-go food items.

                Jamba blends real fruit and whole ingredients into each delicious fresh juice, smoothie, or energy bowl you order and contains no artificial colors, preservatives, or flavors.
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/jamba" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/studentlife/wp-content/uploads/brizy/imgs/food-court-216x145x0x0x216x144x1659491587.jpg" />
          <Card.Body>
            <Card.Title>Campus Center Food Court</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                The Campus Center Food Court offers a variety of food including plate lunches, bentos, grab-and-go salads and wraps, burgers, and more!
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/cc-food-court" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <h2>Paradise Palms</h2>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/dunkin_logo.png" />
          <Card.Body>
            <Card.Title>Dunkin</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                Dunkin’ Donuts in Paradise Palms Cafe will keep Hawaii running with high-quality beverage offerings–including freshly-brewed Hot and Iced Coffees–paired perfectly with delicious donuts, bakery good, sandwiches and more.
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/dunkin/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2022/10/holoholob_logo.png" />
          <Card.Body>
            <Card.Title>Holoholo Bistro</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line max-len */}
              <Truncate lines={5}>
                {/* eslint-disable-next-line max-len */}
                Located near Legacy Path closest to the Dole Street crosswalk, Holoholo Bistro is the mobile concept of Holoholo Grill featuring convenient and delicious grab-and-go items. Made with local, fresh ingredients, these tasty meals and snacks are perfect quick bite to eat.
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/holoholo-bistro/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/landl_logo.png" />
          <Card.Body>
            <Card.Title>L&L</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line max-len */}
              <Truncate lines={5}>
                {/* eslint-disable-next-line max-len */}
                Delicious local and Asian-American fusion cuisine served in big portions at reasonable prices! Try delicious L&L favorites like the Hawaiian Barbecue beef, chicken, or short ribs! Enjoy L&L’s famous fried chicken katsu, the best in town! Grab-and-go, breakfast items and party packs for groups also available.
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/ll-hawaiian-barbecue/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/lecrepe_logo.png" />
          <Card.Body>
            <Card.Title>Le Crêpe Café</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line max-len */}
              <Truncate lines={5}>
                {/* eslint-disable-next-line max-len */}
                Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert — close your eyes and you’re in Paris!
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/le-crepe-cafe/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/lasoon_logo.png" />
          <Card.Body>
            <Card.Title>Lasoon</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                Lasoon offers natural home-cooked Nepali and Indian food for everyone. From a $5 bowl options when you are in a hurry to larger plates to please your appetite.

                We are focusing on vegan and gluten free meals and offer 4 – 5 options that are changed daily. Besides the vegan options we offer 3 meat options ranging from mild to spicy!
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/lasoon/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/panda_logo.png" />
          <Card.Body>
            <Card.Title>Panda Express</Card.Title>
            <Card.Text>
              {/* eslint-disable-next-line max-len */}
              <Truncate lines={5}>
                {/* eslint-disable-next-line max-len */}
                Panda Express serves gourmet Chinese food made with only the freshest ingredients. Famous for its Orange Chicken, they also offer a number of Wok Smart entrées that contain less than 250 calories per serving. Panda Express’ offerings can be enjoyed in Panda Bowls, or two and three item plates. Perfect for lunch, dinner or as a pick-me-up snack between classes.
              </Truncate>
            </Card.Text>
            <Button href="https://manoa.hawaii.edu/food/panda-express/" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <h2>Residential Halls</h2>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://content-service.sodexomyway.com/media/MDS%20GIF2_tcm247-17796.png?url=https://uhm.sodexomyway.com/" />
          <Card.Body>
            <Card.Title>Hale Aloha Cafe</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                Hale Aloha Café serves your favorite comfort foods and cuisine influenced by global flavors.

                Menus available online and on the Everyday App

                Located at the center of the Hale Aloha Towers on the lower campus, Hale Aloha Cafe is open 7 days a week
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/hale-aloha-cafe" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className="eat-list-img" src="https://content-service.sodexomyway.com/media/MDS%20GIF2_tcm247-17796.png?url=https://uhm.sodexomyway.com/" />
          <Card.Body>
            <Card.Title>Gateway Cafe</Card.Title>
            <Card.Text>
              <Truncate lines={5}>
                Gateway Cafe offers Breakfast and Lunch during the week. Menus available online and on the Everyday App.
              </Truncate>
            </Card.Text>
            <Button href="https://uhm.sodexomyway.com/dining-near-me/gateway-cafe" variant="green">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

);

export default DiningComp;
