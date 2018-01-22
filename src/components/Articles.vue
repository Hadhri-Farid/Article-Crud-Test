<template>
  <v-card color="grey lighten-4" flat>
    <v-card-text>
      <v-container fluid>
          <h1>Creer votre Article</h1>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="Titre de votre article"
              id="titre"
              v-model="newTitle"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="input-7-1"
              label="Contenu de votre article"
              id="text"
              multi-line
              v-model="newText"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="Url de l'image"
              id="image"
              v-model="newImg"
            ></v-text-field>
            <v-layout row>
                <v-spacer></v-spacer>
                <v-btn color="success" dark large v-on:click="addArticle">Creer</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
        <template>
        <v-data-table
            v-bind:headers="headers"
            v-bind:items="items"
            v-model="selected"
            item-key="id"
            select-all
            class="elevation-1"
            no-data-text="Aucune entrée"
            rows-per-page-text="Lignes par page"
        >
        <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
             <span slot="activator">
             {{ props.header.text }}
             </span>
            <span>
             {{ props.header.text }}
            </span>
        </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          color="primary"
          hide-details
          v-model="props.selected"
        ></v-checkbox>
      </td>
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right" id="sucess">{{ props.item.text }}</td>
      <td class="text-xs-right"><img :src="newImg"></td>
      <td class="text-xs-right">{{ props.item.date }}</td>
      <v-btn fab dark small color="primary">
        <v-icon dark>edit</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  <v-btn v-on:click="deleteArticle()" dark color="red" large v-if="selected.length != 0">
               <v-icon large left>remove_circle</v-icon> Supprimer les articles selectionnés
              </v-btn>
  </template>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>

import store from './ArticlesStore'

export default {
  updated: function () {
    this.$nextTick(function () {
    // Ce code va être exécuté seulement
    // une fois le rendu de la vue entière terminé
    const displayNone = document.getElementsByClassName('hide');
    console.log(displayNone);
  })
},
  store: store,
  data () {
    return {
      newTitle: '',
      newText: '',
      newImg: '',
      newDate: new Date().toLocaleString(),
      newId: 0,
        search: '',
        selected: [],
        headers: [
          {
            text: 'Titre',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Description',
            sortable: false
            },
          {
            text: 'Images',
            sortable: false
            },
          {
              text: 'Date de création',
              sortable: true,
          }
        ],
        items: [],
      };
  },
// Ok donc il faut completement supprimer les v-model il ne répond pas à la problematique, voilà pourquoi il faut utiliser Vuex afin de faire passer les infos
// par contre je n'arrive pas à savoir si vuex à un rapport avec la bdd ou si les deux ne communiquent pas entre eux
  methods: {
    addArticle() {
    this.newId++;
      this.items.push({
        name: this.newTitle,
        text: this.newText,
        img: this.newImg,
        date: this.newDate,
        id : this.newId
      });
      console.log(this.newId);
    },
      deleteArticle() {
      if (this.selected.length != 0) {
          this.selected.forEach(element => {
              for(var i = 0; i < this.selected.length; i++)
              {
                // solution naze qui marche à 2%
                this.selected[i].name = "";
                this.selected[i].text = "";
                this.selected[i].img = "";
                this.selected[i].date = "";
              // displayNone.classList.add("hide"); mauvaise idée et en plus ne marche pas
              }
          });

      } else {
          console.log("fail");
      }
    },
  }
};
</script>

<style scoped>
li {
    list-style: none;
}

img {
    width: 50px;
    height: 50px;
}

.hide {
  display: none;
}
</style>
