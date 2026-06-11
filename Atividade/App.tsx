import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { ItemCatalogo } from './src/components/ItemCatalogo/ItemCatalogo';
import { styles } from './src/styles/styles';

// Tipo que define a estrutura de uma música na lista
type Item = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  duracao: string;
};

// Array de objetos: dados para popular a FlatList com 9 músicas de diferentes gêneros
const itensCatalogo: Item[] = [
  {
    id: '1',
    nome: 'Quando o Sol Se For',
    descricao: 'Rock nacional.',
    categoria: 'Rock',
    duracao: '3:55',
  },
  {
    id: '2',
    nome: 'Não Sei Viver Sem Ter Você',
    descricao: 'Rock nacional.',
    categoria: 'Rock',
    duracao: '4:07',
  },
  {
    id: '3',
    nome: 'Quase Sem Querer',
    descricao: 'Rock nacional.',
    categoria: 'Rock',
    duracao: '4:46',
  },
  {
    id: '4',
    nome: 'Amiga da Minha Mulher',
    descricao: 'Pagode brasileiro.',
    categoria: 'Pagode',
    duracao: '3:36',
  },
  {
    id: '5',
    nome: 'O Descobridor dos Sete Mares',
    descricao: 'Pagode brasileiro.',
    categoria: 'Pagode',
    duracao: '3:15',
  },
  {
    id: '6',
    nome: 'Psycho',
    descricao: 'Rap internacional.',
    categoria: 'Rap',
    duracao: '3:41',
  },
  {
    id: '7',
    nome: 'The Real Slim Shady',
    descricao: 'Rap internacional.',
    categoria: 'Rap',
    duracao: '4:44',
  },
  {
    id: '8',
    nome: 'Safe and Sound',
    descricao: 'Pop internacional.',
    categoria: 'Pop',
    duracao: '3:13',
  },
  {
    id: '9',
    nome: 'Stereo Hearts',
    descricao: 'Pop internacional.',
    categoria: 'Pop',
    duracao: '3:31',
  },
];

type AppState = {
  categoriaSelecionada: string;
  itemSelecionado: Item | null;
};

// Cria array de categorias únicas a partir dos itens (Todos, Rock, Pop, Rap, Pagode)
const categorias = ['Todos', ...Array.from(new Set(itensCatalogo.map((item) => item.categoria)))];


export default class App extends React.Component<Record<string, never>, AppState> {
  // STATE da classe: controla categoria e item selecionado
  state: AppState = {
    categoriaSelecionada: 'Todos',
    itemSelecionado: null,
  };

  // Método: atualiza STATE quando um item é selecionado
  selecionarItem = (item: Item) => {
    this.setState({ itemSelecionado: item });
  };

  // Método: atualiza STATE quando uma categoria é selecionada
  selecionarCategoria = (categoria: string) => {
    this.setState({ categoriaSelecionada: categoria });
  };

  getItensFiltrados = () => {
    const { categoriaSelecionada } = this.state;
    if (categoriaSelecionada === 'Todos') return itensCatalogo;
    return itensCatalogo.filter((item) => item.categoria === categoriaSelecionada);
  };

  render() {
    const { categoriaSelecionada, itemSelecionado } = this.state;
    const itensFiltrados = this.getItensFiltrados();

    return (
      <View style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Lista de Músicas</Text>
            <Text style={styles.subtitle}>
              Selecione uma categoria e toque em uma música.
            </Text>
          </View>

          <Text style={styles.subtitle}>
            {itemSelecionado
              ? `Item selecionado: ${itemSelecionado.nome}`
              : 'Nenhum item selecionado ainda.'}
          </Text>

          <ScrollView
            horizontal
            style={styles.chipsRow}
            contentContainerStyle={styles.chipsContent}
            showsHorizontalScrollIndicator={false}
          >
            {/* Chips de categorias como botões: todos, rock, pop, rap, pagode */}
            {categorias.map((categoria) => {
              const ativa = categoria === categoriaSelecionada;
              return (
                <Pressable
                  key={categoria}
                  style={[styles.chip, ativa && styles.chipActive]}
                  onPress={() => this.selecionarCategoria(categoria)}
                >
                  <Text style={[styles.chipText, ativa && styles.chipTextActive]}>{categoria}</Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* FLATLIST - Renderiza lista de músicas filtradas */}
          <FlatList
            style={styles.list}
            data={itensFiltrados}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <ItemCatalogo
                nome={item.nome}
                descricao={item.descricao}
                categoria={item.categoria}
                duracao={item.duracao}
                onPress={() => this.selecionarItem(item)}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
