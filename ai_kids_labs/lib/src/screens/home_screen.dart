import 'package:flutter/material.dart';
import '../data/mission_data.dart';
import '../widgets/mission_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Kids Labs'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
      ),
      body: ListView.builder(
        padding: const EdgeInsets.symmetric(vertical: 16),
        itemCount: season2Missions.length,
        itemBuilder: (context, index) {
          final mission = season2Missions[index];
          return MissionCard(mission: mission);
        },
      ),
    );
  }
}
