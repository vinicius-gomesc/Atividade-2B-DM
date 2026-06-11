/**
 * ESTILOS DO APLICATIVO
 * 
 * COMO OS ESTILOS FORAM ORGANIZADOS:
 * - Arquivo separado: src/styles/styles.ts
 * - Utilizamos StyleSheet.create() do React Native
 * - Cada elemento visual possui um estilo correspondente
 * - Reutilizável em todo o app via import
 * 
 * PROPRIEDADES DE FLEXBOX UTILIZADAS:
 * - flex: 1 => Tamanho dinâmico que ocupa espaço disponível
 * - flexDirection: 'row' => Alinha itens horizontalmente (padrão)
 * - justifyContent: 'center' => Centraliza itens no eixo principal
 * - alignItems: 'center' => Centraliza itens no eixo transversal
 * - alignSelf: 'flex-start' => Item não expande dinamicamente
 * 
 * TAMANHOS FIXOS vs DINÂMICOS:
 * - FIXOS: paddingHorizontal, paddingVertical, marginBottom, fontSize, width, height
 * - DINÂMICOS: flex: 1 faz elementos expandirem conforme espaço disponível
 */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal: flex DINÂMICO (ocupa todo espaço) + tamanho FIXO (padding)
  container: {
    flex: 1, // DINÂMICO: expande para ocupar espaço inteiro
    backgroundColor: '#f3f4f6',
    paddingTop: 56, // FIXO: espaço para status bar
  },
  // Área de conteúdo: flex DINÂMICO + margem lateral FIXA
  content: {
    flex: 1, // DINÂMICO: expande
    paddingHorizontal: 16, // FIXO: 16px de margem nos lados
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 6,
  },
  // ScrollView horizontal para categorias: altura FIXA + margem FIXA
  chipsRow: {
    marginTop: 8, // FIXO
    marginBottom: 16, // FIXO
    flexGrow: 0, // Não expande dinamicamente
    minHeight: 50, // FIXO: altura mínima
  },
  // Container dos chips: FLEXBOX alignItems + padding FIXO
  chipsContent: {
    paddingLeft: 2, // FIXO
    paddingRight: 10, // FIXO
    paddingVertical: 4, // FIXO
    alignItems: 'center', // FLEXBOX: alinha verticalmente
  },
  // Botão de categoria: tamanhos FIXOS + FLEXBOX alignSelf
  chip: {
    paddingVertical: 7, // FIXO
    paddingHorizontal: 14, // FIXO
    borderRadius: 20, // FIXO
    marginRight: 8, // FIXO
    borderWidth: 1, // FIXO
    borderColor: '#cbd5e1', // FIXO
    backgroundColor: '#fff', // FIXO
    alignSelf: 'flex-start', // FLEXBOX: não expande
  },
  // Estilo quando chip está ativo (categoria selecionada)
  chipActive: {
    backgroundColor: '#2563eb', // Azul quando ativo
    borderColor: '#2563eb',
  },
  // Texto do chip
  chipText: {
    fontSize: 12, // FIXO
    color: '#334155', // FIXO
    fontWeight: '600', // FIXO
  },
  // Texto quando chip está ativo
  chipTextActive: {
    color: '#fff', // Branco quando ativo
  },
  // FlatList: flex DINÂMICO para ocupar espaço restante
  list: {
    flex: 1, // DINÂMICO: expande para preencher espaço
  },
  // Container interno da FlatList: padding FIXO
  listContainer: {
    paddingTop: 4, // FIXO
    paddingBottom: 16, // FIXO
  },
});
