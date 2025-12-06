from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='vla_package', # Replace with actual package name
            executable='voice_to_text_node',
            name='voice_to_text_node',
            output='screen',
            # Add parameters for Whisper API key or local model path
        ),
        Node(
            package='vla_package', # Replace with actual package name
            executable='llm_planner_node',
            name='llm_planner_node',
            output='screen',
            # Add parameters for LLM API key or local model path, prompt engineering
        ),
        Node(
            package='vla_package', # Replace with actual package name
            executable='robot_executor_node',
            name='robot_executor_node',
            output='screen',
            # Add parameters for robot specific control interfaces
        ),
    ])
