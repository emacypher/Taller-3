import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import style from "./cardComponent.module.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 200,
    background: "#77ACF1",
    marginBottom: 10,
    marginLeft: 10,
  },
});

const CardComponent = ({
  list,
  comeBack,
  next,
  back,
  index,
  handleSetPart,
}) => {
  const classes = useStyles();
  return (
    <div className={style.main}>
      <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => comeBack()}
        >
          Volver Atras
        </Button>
      </div>
      <div className={style.container}>
        {list.map((cpu, i) => (
          <Card className={classes.root} key={i}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h8" component="h4">
                  {cpu.Name}
                </Typography>
                <Typography gutterBottom variant="h10" component="h4">
                  Cores: {cpu.Cores}
                </Typography>
                <Typography gutterBottom variant="h10" component="h4">
                  Clock: {cpu.Clock}
                </Typography>
                <Typography gutterBottom variant="h10" component="h4">
                  Socket: {cpu.Socket}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleSetPart(cpu, "cpu")}
              >
                Seleccionar
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className={style.buttons}>
        <div className={style.left}>
          {index === 0 && (
            <Button size="small" variant="contained" disable>
              Anterior
            </Button>
          )}

          {index !== 0 && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => back()}
            >
              Anterior
            </Button>
          )}
        </div>
        <div className={style.right}>
          {list.length < 20 && (
            <Button size="small" variant="contained" disable>
              Siguiente
            </Button>
          )}
          {list.length === 20 && (
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => next()}
            >
              Siguiente
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
