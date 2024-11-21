import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Blog Flutter')),
      body: Center(child: Text('Lista de posts aparecerá aquí')),
    );
  }
}
