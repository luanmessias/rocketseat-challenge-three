import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

import SvgLike from './assets/svg/like';
import SvgDel from './assets/svg/delete';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [tecnologies, setTechs] = useState([]);

  useEffect(() => {
    api.get('repositories').then((response) => {
      setRepositories(response.data);
    });

    api.get('techs').then((response) => {
      setTechs(response.data);
    });
  }, []);

  const getTech = (techId) => {
    const techIndex = tecnologies.findIndex((tecs) => tecs.id === techId);
    const techData = tecnologies[techIndex];

    return (
      <Text
        key={techId}
        style={{ ...styles.tech, backgroundColor: `#${techData.color}` }}
      >
        {techData.title}
      </Text>
    );
  };

  async function handleLikeRepository(id) {
    const response = await api.post(`repositories/${id}/like`);

    const likedRepository = response.data;

    const repositoriesUpdated = repositories.map((repository) => {
      if (repository.id === id) {
        return likedRepository;
      }
      return repository;
    });

    async function handleRemoveRepository(id) {
      const newRepositories = rfindTechepositories.filter(
        (repository) => repository.id !== id
      );
      setRepositories(newRepositories);
    }

    setRepositories(repositoriesUpdated);
  };

  async function handleRemoveRepository(id) {
    const newRepositories = repositories.filter(
      (repository) => repository.id !== id
    );
    setRepositories(newRepositories);
  };


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3A4256" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageTitle}>REPOSITORIES</Text>
        <FlatList
          data={repositories}
          keyExtractor={(repository) => repository.id}
          renderItem={({ item: repository }) => (
            <View style={styles.repositoryContainer}>

              <View style={styles.likesContainer}>
                
                <Text
                  style={styles.likeText}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes}
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleLikeRepository(repository.id)}
                  testID={`like-button-${repository.id}`}
                >
                  <Text style={styles.likeSvg}>
                    <SvgLike />
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.line} />

              <View style={styles.midContent}>
                <Text style={styles.repository}>{repository.title}</Text>

                <View style={styles.techsContainer}>
                  {repository.techs.map((tech) => getTech(tech))}
                </View>
              </View>


              <TouchableOpacity
                style={styles.btDelete}
                onPress={() => handleRemoveRepository(repository.id)}
                testID={`like-button-${repository.id}`}
              >
                <SvgDel />
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A4256',
  },
  line: {
    width: 1,
    height: 55,
    backgroundColor: '#3A4256',
    marginHorizontal: 10,
  },
  pageTitle: {
    fontSize: 32,
    color: '#FFF',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#2E3645',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  midContent: {
    flexDirection: 'column',
  },
  repository: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
  },
  techsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFF',
    borderRadius: 3,
  },
  likesContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  likeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: '#4E68A8',
    position: 'absolute',
    bottom: 0,
    borderRadius: 50,
    width: 22,
    height: 22,
    alignItems: 'center',
    zIndex: 1,
    textAlign: 'center',
  },
  btDelete: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#902525',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
