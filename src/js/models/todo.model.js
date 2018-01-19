import { idGenerator } from "../helpers/id-generator";

export let todoModel = (name) => {
  return {
    id: idGenerator(),
    name: name,
    props: {
        active: true,
        favourite: false,
        completed: false
    }
  }
};

export let todoModelArray = [];