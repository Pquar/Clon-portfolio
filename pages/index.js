import data from '../utils/data';
import Layout from '../components/Layout.js';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Produtos</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Adicione ao Carrinho
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
