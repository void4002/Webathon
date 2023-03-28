import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Blog() {
  return (
    <CardGroup>
      <Card style={{padding: "15px"}}>
        <Card.Img variant="top" src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" height="280px" />
        <Card.Body>
          <Card.Title>Why does eating healthy matter?</Card.Title>
          <Card.Text>
          Before we dive into what healthy eating means, it’s important to explain why it matters.

First, food is what fuels you and delivers the calories and nutrients your body needs to function. If your diet is deficient in calories or one or more nutrients, your health may suffer.

Likewise, if you eat too many calories, you may experience weight gain. People with obesity have a significantly increased risk of illnesses like type 2 diabetes, obstructive sleep apnea, and heart, liver, and kidney disease.

Additionally, the quality of your diet affects your disease risk, longevity, and mental health.

While diets rich in ultra-processed foods are linked to increased mortality and a greater risk of conditions like cancer and heart disease, diets comprising mostly whole, nutrient-dense foods are associated with increased longevity and disease protection.

Diets rich in highly processed foods may also increase the risk of depressive symptoms, particularly among people who get less exercise.

What’s more, if your current diet is high in ultra-processed foods and beverages like fast food, soda, and sugary cereals but low in whole foods like vegetables, nuts, and fish, you’re likely not eating enough of certain nutrients, which may negatively affect your overall health.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{padding: "15px"}}>
        <Card.Img variant="top" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/05070155/healthy-food-1024x768.jpeg" height="280px" />
        <Card.Body>
          <Card.Title>Do you have to follow a certain diet to eat health? </Card.Title>
          <Card.Text>
          Absolutely not!

Although certain people need — or choose — to avoid particular foods or adopt diets for health reasons, most people don’t have to follow any specific diet to feel their best.

That’s not to say that certain eating patterns can’t benefit you.

For instance, some people feel healthiest when following a low carb diet, while others thrive on high carb diets.

In general, though, eating healthy has nothing to do with adhering to diets or certain dietary rules. “Healthy eating” simply means prioritizing your wellness by fueling your body with nutritious foods.

The specifics may be different for each person depending on their location, financial situation, culture and society, and taste preferences.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{padding: "15px"}}>
        <Card.Img variant="top" src="https://assets.weforum.org/article/image/zIrDwGrDNcC7Wz0oVAiMg4ESZNqw4aBCUfIqJnWG9tk.jpg" height="280px" />
        <Card.Body>
          <Card.Title>How to make healthy eating work for you</Card.Title>
          <Card.Text>
          Food is one of the many puzzle pieces of your day-to-day life. Between commuting, working, family or social commitments, errands, and many other daily factors, food may be last on your list of concerns.

The first step to following a healthier diet is to make food one of your priorities.

This doesn’t mean that you have to spend hours meal prepping or cooking elaborate meals, but it does require some thought and effort, especially if you have a particularly busy lifestyle.

For example, going to the grocery store once or twice per week will help ensure that you have healthy choices in your fridge and pantry. In turn, a well-stocked kitchen makes choosing healthy meals and snacks much easier.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Blog;