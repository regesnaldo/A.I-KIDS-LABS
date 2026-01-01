import 'package:flutter/material.dart';
import 'src/screens/home_screen.dart';

void main() {
  runApp(const AiKidsLabsApp());
}

class AiKidsLabsApp extends StatelessWidget {
  const AiKidsLabsApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AI Kids Labs',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
        useMaterial3: true,
        scaffoldBackgroundColor: Colors.grey[50],
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const HomeScreen(),
    );
  }
}
