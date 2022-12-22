import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {q: 'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '52a5824591msh883d3e4d454198fp152ff3jsnad35bf6196d3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  }